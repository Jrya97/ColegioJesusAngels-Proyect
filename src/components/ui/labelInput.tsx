
interface BaseProps {
  legend: string;
  classFieldset?: string;
  classInput?: string;
  placeholder?: string;
}

interface InputProps extends BaseProps, React.InputHTMLAttributes<HTMLInputElement> {
  multiline?: false;
}

interface TextareaProps extends BaseProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  multiline: true;
}

type LabelInputProps = InputProps | TextareaProps;

export const LabelInput: React.FC<LabelInputProps> = ({
  legend,
  classFieldset = "",
  classInput = "",
  placeholder = "",
  multiline = false,
  ...props
}) => {
  return (
    <fieldset
      className={`rounded-lg p-[1px] bg-gradient-to-r from-green-500 to-[#24a9e7]
      transition-all duration-300 hover:shadow-[0_0_25px_rgba(36,169,231,0.5)]
      focus-within:shadow-[0_0_30px_rgba(36,169,231,0.7)] ${classFieldset}`}
      >
      <div className="rounded-lg bg-white p-3">
        <legend className="text-sm font-semibold text-gray-700 tracking-wide">
          {legend}
        </legend>

        {multiline ? (
          <textarea
            placeholder={placeholder}
            className={`w-full min-h-[8rem] resize-none py-1 bg-white text-gray-800 placeholder-gray-400 
              focus:outline-none focus:border-transparent focus:ring-0 transition-all duration-300 ${classInput}`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            placeholder={placeholder}
            className={`w-full  bg-white text-gray-800 placeholder-gray-400 
              focus:outline-none focus:border-transparent focus:ring-0 transition-all duration-300 ${classInput}`}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
    </fieldset>
  );
};
