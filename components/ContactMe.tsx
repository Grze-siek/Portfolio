'use client';
import { PageInfo } from '@/typings';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as React from 'react';

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  return (
    <div className="h-screen relative flex flex-col text-center max-w-[800px] md:text-left md:flex-row md:max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
        Contact me
      </h3>

      <div className="flex flex-col px-5 space-y-10 h-[60vh]">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="underline decoration-primary-color">Lets talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-primary-color" />
            <p className="text-2xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-primary-color" />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-primary-color" />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            <input
              {...register('email')}
              placeholder="Email"
              type="text"
              className="contactInput"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-primary-color py-5 px-10 rounded-md text-black font-bold text-lg hover:brightness-110">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
