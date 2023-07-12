import Link from 'next/link';
import { ChangeEvent } from 'react';

interface FormElementProps {
	type?: string;
	label?: string;
	placeholder: string;
	fieldRef?: any;
	hasError?: boolean;
	onChange: any;
	// onChange?: (value: string) => void;
}

const FormElement: React.FC<FormElementProps> = ({
	type,
	label,
	placeholder,
	fieldRef,
	hasError,
	onChange,
}) => {
	const classes =
		'form-control w-full px-3 py-1.5 text-description rounded border border-solid border-gray-300 focus:border-amber_300 focus:outline-none';

	return (
		<div className="form-group mb-6">
			<label className="block text-dark text-sm font-bold mb-2">{label}</label>
			{type === 'textarea' ? (
				<textarea
					className={classes}
					rows={3}
					placeholder={placeholder}
					{...fieldRef}
				/>
			) : (
				<input
					className={classes}
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					{...fieldRef}
				/>
			)}
			{hasError && (
				<p className="text-red-500 text-xs italic pt-2">{`${label} is required`}</p>
			)}
		</div>
	);
};

export default FormElement;
