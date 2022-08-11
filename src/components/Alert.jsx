import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'info',

      ].map((variant) => (
        
        <Alert className='text-center' key={variant} variant={variant}>
          <Alert.Heading>Holi</Alert.Heading>
          Esta galería está siendo actualizada de a poco.
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;