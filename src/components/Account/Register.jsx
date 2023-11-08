// import { Input } from '../Form/Input';
// import { Link } from 'react-router-dom';
// import CustomButton from '../CustomButton/CustomButton';
// import Head from '../../Head';

// const Register = () => {
//   return (
//     <section className="bg-gray-200 h-full p-5 flex flex-col gap-5">
//       <Head title={'Cadastrar'} />
//       <h1 className="text-3xl text-center font-bold">Criar a sua conta</h1>
//       <div className="flex justify-center">
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="flex flex-col justify-center w-4/5"
//         >
//           <Input
//             label={'Nome:'}
//             type={'text'}
//             name={'name'}
//             id={'name'}
//             classLabel="text-lg font-semibold"
//             className="text-xl text-gray-800 tracking-wide w-full mb-5 pl-3 py-2"
//           />
//           <Input
//             label={'Email:'}
//             type={'email'}
//             name={'email'}
//             id={'email'}
//             classLabel="text-lg font-semibold"
//             className="text-xl text-gray-800 tracking-wide w-full mb-5 pl-3 py-2"
//           />
//           <Input
//             label={'Senha:'}
//             type={'password'}
//             name={'password'}
//             id={'password'}
//             classLabel="text-lg font-semibold"
//             className="text-xl text-gray-800 tracking-wide w-full mb-5 pl-3 py-2"
//           />
//           <p className="text-center">
//             Já possui conta?{' '}
//             <Link to={'../login'} className="text-blue-600">
//               Entrar
//             </Link>
//           </p>
//           <CustomButton
//             className={
//               'text-white font-semibold tracking-wider bg-blue-400 active:opacity-75 py-5 mt-5 w-full rounded'
//             }
//           >
//             Criar conta
//           </CustomButton>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Register;
