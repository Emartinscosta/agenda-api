import { DataTypes } from "sequelize";
import { connection } from '../database/connection.jsS'

const agenda = connection.define( 
    'agenda',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nomedocliente: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataAgendamento: {
      type: DataTypes.DATEONLY, 
      allowNull: false,
    },
    descricaoAgendamento: {
      type: DataTypes.TEXT, 
      allowNull: false,
    },
    horarioDoAgendamento: {
      type: DataTypes.TIME, 
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default agenda;
