import { Outlet } from 'react-router-dom';
import Head from '../Head';

const AccountPage = () => {
  return (
    <main className="h-full grid grid-cols-2 justify-center gap-5 px-40 pt-20">
      <Head title={'Conta'} />
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/6417826/pexels-photo-6417826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
        className={`w-full h-[32rem] bg-no-repeat bg-cover bg-center`}
      />
      <div className="h-[32rem] border-l-2 border-x-gray-200 pl-5">
        <Outlet />
      </div>
    </main>
  );
};

export default AccountPage;
