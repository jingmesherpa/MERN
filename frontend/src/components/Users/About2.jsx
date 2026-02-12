import { useNavigate } from "react-router-dom";

const About2 = () => {
  const data = localStorage.setItem("name", "Jingme");
  const data2 = sessionStorage.setItem("age", "11");
  const router = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
router("/about/about3");
        }}
      >
        login
      </button>
    </div>
  );
};

export default About2;