function Button({ children, version, type, isDisabled }: ButtonProps) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

type ButtonProps = {
  children: React.ReactNode;
  version: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  isDisabled: boolean;
};

export default Button;
