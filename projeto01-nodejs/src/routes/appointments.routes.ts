import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

import CreateAppointmentServices from '../services/CreateAppointmentServices';

import Appointment from '../models/Appointment';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

/**
 * Routes
 * 1-Transformação de dados
 * 2-Recebe a requisição, repassa os dados para outro arquivo e retorna a resposta
 */

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  // - No insomnia utilizar date 'timestamp=>iso-8601' americano

  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentServices(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
