interface InputProps {
    ref?: any;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ref, placeholder, value, onChange }: InputProps) {
    return (
        <div>
            <input
                ref = {ref}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type="text"
                className="px-4 py-2 border rounded m-2"
            />
        </div>
    );
}
