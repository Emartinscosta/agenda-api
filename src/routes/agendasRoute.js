import { Router } from 'express';
import agenda from '../database/agenda.js';

const agendaRoutes = Router();

agendaRoutes.get('/agendamento', async (req, res) => {
  try {
    const agendas = await agenda.findAll();
    res.json(agendas);
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro Interno no Servidor. Tente mais Tarde!',
    });
  }
});

agendaRoutes.get('/agendamento/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const foundAgenda = await agenda.findByPk(id);
    if (foundAgenda) {
      res.json(foundAgenda);
    } else {
      res.status(404).json({
        mensagem: 'Agendamento não Encontrado!',
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro Interno no Servidor. Tente mais Tarde!',
    });
  }
});

agendaRoutes.post('/agendamento', async (req, res) => {
  const dados = req.body;
  try {
    const salvo = await agenda.create(dados);
    res.json(salvo);
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro Interno no Servidor. Tente mais Tarde!',
    });
  }
});

agendaRoutes.put('/agendamento/:id', async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const foundAgenda = await agenda.findByPk(id);

    if (foundAgenda) {
      await foundAgenda.update(dados);
      res.json(foundAgenda);
    } else {
      res.status(404).json({
        mensagem: 'Agendamento não Encontrado!',
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro Interno no Servidor. Tente mais Tarde!',
    });
  }
});

agendaRoutes.delete('/agendamento/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const foundAgenda = await agenda.findByPk(id);

    if (foundAgenda) {
      await foundAgenda.destroy();
      res.json({ mensagem: 'Agendamento Removido!' });
    } else {
      res.status(404).json({
        mensagem: 'Agendamento não Encontrado!',
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro Interno no Servidor. Tente mais Tarde!',
    });
  }
});

export default agendaRoutes;
