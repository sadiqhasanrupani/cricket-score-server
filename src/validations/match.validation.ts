import * as yup from 'yup';

const schema = yup.object().shape({
  teamA: yup.string().required('Team A name is required'),
  teamB: yup.string().required('Team B name is required'),
  teamsAPlayer: yup.array().of(yup.string()).required('Team A players are required'),
  teamsBPlayer: yup.array().of(yup.string()).required('Team B players are required'),
  overs: yup.number().required('Overs are required').moreThan(0, 'Overs should be greater than 0'),
  innings: yup.array().of(
    yup
      .object()
      .shape({
        teamName: yup
          .string()
          .required('Team name is required')
          .oneOf([yup.ref('teamA'), yup.ref('teamB')], 'Team name must be either Team A or Team B'),
      })
      .required(),
  ).required(),
});

export default schema;
