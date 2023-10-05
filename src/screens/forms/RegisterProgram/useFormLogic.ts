import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import * as yup from 'yup';
 
  interface FormData {
    nomePrograma: string;
    descricao: string;
    dataInicio: string;
    dataFim: string;
    local: string;
    idioma: string;
    dataInicioPrograma: string;
    dataFimPrograma: string;
    link: string;
    informacoesAdicionais: string;
    tags: [];
    // Add more fields as needed
  } 
const validationSchema = yup.object().shape({
  nomePrograma: yup.string().required('Nome do programa é obrigatório'),
  descricao: yup.string().required('Descrição do programa é obrigatória'),
  dataInicio: yup.string().required('Insira uma data de início válida, no formato DD/MM/AAAA'),
  dataFim: yup.string().required('Insira uma data fim válida no formato DD/MM/AAAA'),
  local: yup.string().required('Local é obrigatório'),
  idioma: yup.string().required('Idioma é obrigatório'),
  dataInicioPrograma: yup.string().required('Insira uma data início válida, no formato DD/MM/AAAA'),
  dataFimPrograma: yup.string().required('Insira uma data fim válida, no formato DD/MM/AAAA'),
  link: yup.string().url().required('Link de Acesso é obrigatório'),
  informacoesAdicionais: yup.string().notRequired(),
  tags: yup.string().notRequired(),

  // Add validation for other fields
});

const useFormLogic = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema) as any, // Explicitly define ResolverOptions type
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    handleSubmit((data) => console.log(data));
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    // Handle form submission error
    console.error(errors);
  };

  return {
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
    onSubmit,
    onError,
  };
};


export default useFormLogic;
