export function Input({ classLabel, label, type, id, ...props }) {
  return (
    <>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <input type={type} name={id} id={id} {...props} />
    </>
  );
}
