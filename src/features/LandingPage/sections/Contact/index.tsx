import Heading from '@/components/Heading';
import FormElement from '@/components/FormElement';
import { Controller, useForm } from 'react-hook-form';
import Widget from '@/components/Widget';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { useState } from 'react';

const ContactSection = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});
	const [fullname, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch('/api/sendEmail', {
			body: JSON.stringify({
				email: email,
				fullname: fullname,
				message: message,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			return;
		}
		console.log(fullname, email, message);
	};

	return (
		<div>
			<main className="bg-light px-10 pb-32 md:px-20 lg:px-40 section scrollspy">
				<section id="contact" >
					<div className="pt-32 pb-16 flex justify-center">
						<Heading title="Contact" />
					</div>
					<div className="rounded-xl shadow-lg bg-white p-16 px-4 md:px-6">
						<div className="grid grid-cols-2 pb-3 place-items-center">
							<Widget
								label="Phone"
								description="07949 149878"
								icon={BiPhoneCall}
							/>
							<Widget
								label="Email"
								description="chris.abs96@gmail.com"
								icon={HiOutlineMailOpen}
							/>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Controller
								name="name"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<FormElement
										type="text"
										label="Name"
										placeholder="Enter name here..."
										fieldRef={field}
										hasError={errors.name?.type === 'required'}
										onChange={(e) => {
											return setFullName(e.target.value);
										}}
									/>
								)}
							/>
							<Controller
								name="email"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<FormElement
										type="email"
										label="Email"
										placeholder="Enter email here..."
										fieldRef={field}
										hasError={errors.email?.type === 'required'}
										onChange={(e) => {
											return setEmail(e.target.value);
										}}
									/>
								)}
							/>
							<Controller
								name="message"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<FormElement
										type="textarea"
										label="Message"
										placeholder="Enter message here..."
										fieldRef={field}
										hasError={errors.message?.type === 'required'}
										onChange={(e) => {
											return setMessage(e.target.value);
										}}
									/>
								)}
							/>
							<button
								type="submit"
								className="w-full px-6 py-3 bg-amber_300 text-white font-medium uppercase rounded shadow-md hover:bg-amber_400 focus:outline-none focus:ring-0 active:bg-amber_500"
							>
								send
							</button>
						</form>
					</div>
				</section>
			</main>
		</div>
	);
};

export default ContactSection;
