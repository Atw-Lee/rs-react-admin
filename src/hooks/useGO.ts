import { useNavigate } from '@tanstack/react-router';

const useGO = () => {
  const navigate = useNavigate();
  const go = (to: string) => {
    navigate({
      to,
    });
  };

  return go;
};

export default useGO;
