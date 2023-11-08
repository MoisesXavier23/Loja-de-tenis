// import CustomButton from '../CustomButton/CustomButton';
// import { Input } from '../Form/Input';
// import { Link } from 'react-router-dom';
// import Head from '../../Head';

// const Login = () => {
//   return (
//     <section className="bg-gray-200 h-full p-5 flex flex-col gap-14">
//       <Head title={'Entrar'} />
//       <h1 className="text-3xl text-center font-bold">Entrar</h1>
//       <div className="flex justify-center">
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="flex flex-col justify-center w-4/5"
//         >
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
//             Não possui uma conta?{' '}
//             <Link to={'../register'} className="text-blue-600">
//               Criar
//             </Link>
//           </p>
//           <CustomButton
//             className={
//               'text-white font-semibold tracking-wider bg-blue-400 active:opacity-75 py-5 mt-16 w-full rounded'
//             }
//           >
//             Entrar
//           </CustomButton>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;
