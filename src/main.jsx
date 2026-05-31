// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Base from './Login/Base.jsx';
import App5 from './TechSchool/App.jsx';
import { BrowserRouter } from 'react-router';
import AppP from './LastProject/App.jsx';
import App6 from './ReactApp/App.jsx';
import AppDate from './DateProject/AppDate.jsx';
import RegisterForm from './formikProject/RegisterForm.jsx';
const Root = document.getElementById('root')
createRoot(Root).render(
    <BrowserRouter>
        <AppDate />
    </BrowserRouter>
)