'use client';
import { PageInfo } from '@/typings';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    subject: yup.string().required('Please, input subject'),
    message: yup.string().required('Please, input message'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function ContactMe({ pageInfo }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    emailjs.send(serviceId, templateId, data, publicKey).then(
      (result) => {
        setIsLoading(false);
        toast.success('Message sent 😃', {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      },
      (error) => {
        setIsLoading(false);
        toast.error('There was a problem, please try again 😕', {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    );
  };

  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-center max-w-[800px] md:text-left md:flex-row md:max-w-7xl md:px-10 mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl mb-10">
        Contact me
      </h3>

      <div className="flex flex-col px-5 space-y-10 h-[60vh] max-w-full mx-auto">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="underline decoration-primary-color">Lets talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-6">
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <PhoneIcon className="h-5 w-5 md:h-7 md:w-7 animate-pulse text-primary-color" />
            <p className="text-xl md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <EnvelopeIcon className="h-5 w-5 md:h-7 md:w-7 animate-pulse text-primary-color" />
            <p className="text-xl md:text-2xl ">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <MapPinIcon className="h-5 w-5 md:h-7 md:w-7 animate-pulse text-primary-color" />
            <p className="text-xl md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row max-md:space-y-2 md:space-x-2 w-full">
            <div className="w-full">
              <input
                {...register('name')}
                placeholder="Name"
                type="text"
                className="contactInput max-md:w-full"
              />
              <p className="text-sm text-red-500">{errors.name?.message}</p>
            </div>
            <div className="w-full">
              <input
                {...register('email')}
                placeholder="Email"
                type="text"
                className="contactInput max-md:w-full"
              />
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />
          <p className="text-sm text-red-500">{errors.subject?.message}</p>
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <p className="text-sm text-red-500">{errors.message?.message}</p>
          <button
            className={`bg-primary-color py-5 px-10 rounded-md text-black font-bold text-lg hover:brightness-110 ${
              isLoading ? 'animate-pulse cursor-none' : 'cursor-pointer'
            }`}
          >
            Sumbit
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ContactMe;
