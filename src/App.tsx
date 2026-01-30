import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import CountriesSection from './components/CountrySection';
import ServicesSection from './components/ServiceSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialSection';
import CallToActionSection from './components/CallToActionSection';
import FooterSection from './components/FooterSection';
import FAQ from './components/FAQ';
import AboutPage from './pages/AboutPage';
import StudyUKPage from './pages/Study-Abroad/UKPage';
import StudyUSAPage from './pages/Study-Abroad/USAPage';
import StudyCanadaPage from './pages/Study-Abroad/CanadaPage';
import StudyInAustralia from './pages/Study-Abroad/AustraliaPage';
import StudyEuropePage from './pages/Study-Abroad/EuropePage';
import StudyNewZealandPage from './pages/Study-Abroad/NewZealandPage';
import StudyGermanyPage from './pages/Study-Abroad/GermanyPage';
import StudyIrelandPage from './pages/Study-Abroad/IrelandPage';
import ApplicationProcessPage from './pages/Services/Student-Profile';
import ProfessionalCareerGuidancePage from './pages/Services/ProfessionalCareerGuidance';
import PTEPreparation from './pages/Services/PTE-preparation';
import AbroadPartTimeJob from './pages/Services/AbroadPartTimeJob';
import AccommodationAssistance from './pages/Services/AccommodationAssistance';
import EducationLoanProcessing from './pages/Services/EducationLoan';
import ExpertCounselling from './pages/Services/ExpertCounselling';
import PostMastersInternship from './pages/Services/PostMastersInternship';
import PreDeparture from './pages/Services/PreDeparture';
import ScholarshipFinancial from './pages/Services/ScholarshipFinancial';
import UniversityApplication from './pages/Services/UniversityApplication';
import VisaAssistance from './pages/Services/VisaAssistance';
import FAQPage from './pages/FAQPage';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/Animations/ScrollToTop';

function App() {
  return (
    <>
    <div className="w-full overflow-x-hidden">
    <Router>
      <ScrollToTop/>
      <Header/>
      <Routes>
      <Route path='/' element={
      <div className="w-full overflow-x-hidden">   
        <HeroSection/>
        <CountriesSection/>
        <ServicesSection/>
        <CallToActionSection/>
        <WhyChooseUsSection/>
        <TestimonialsSection/>
        <FAQ/>
      </div> }/>
      <Route path='/about-dartglobe' element={<AboutPage/>}/>
      <Route path='/study-abroad/uk' element={<StudyUKPage/>}/>
      <Route path='/study-abroad/usa' element={<StudyUSAPage/>}/>
      <Route path='/study-abroad/canada' element={<StudyCanadaPage/>}/>
      <Route path='/study-abroad/australia' element={<StudyInAustralia/>}/>
      <Route path='/study-abroad/europe' element={<StudyEuropePage/>}/>
      <Route path='/study-abroad/new-zealand' element={<StudyNewZealandPage/>}/>
      <Route path='/study-abroad/germany' element={<StudyGermanyPage/>}/>
      <Route path='/study-abroad/ireland' element={<StudyIrelandPage/>}/>
      <Route path='/services/student-profile' element={<ApplicationProcessPage/>}/>
      <Route path='/services/career-guidance' element={<ProfessionalCareerGuidancePage/>}/>
      <Route path='/services/IELTS/TOEFL/PTE-Preparation' element={<PTEPreparation/>}/>
      <Route path='/services/abroad-part-time-job' element={<AbroadPartTimeJob/>}/>
      <Route path='/services/accommodation-assistance' element={<AccommodationAssistance/>}/>
      <Route path='/services/education-loan-processing' element={<EducationLoanProcessing/>}/>
      <Route path='/services/one-on-one-expert-counselling' element={<ExpertCounselling/>}/>
      <Route path='/services/post-masters-internship' element={<PostMastersInternship/>}/>
      <Route path='/services/pre-departure' element={<PreDeparture/>}/>
      <Route path='/services/scholarship-financial-aid-assistance' element={<ScholarshipFinancial/>}/>
      <Route path='/services/university-application' element={<UniversityApplication/>}/>
      <Route path='/services/visa-assistance' element={<VisaAssistance/>}/>
      <Route path='/faq' element={<FAQPage/>}/>
      <Route path='/contact' element={<ContactForm/>}/>
       </Routes> 
        <FooterSection/>       
        </Router>
        </div>
    </>
  );
}

export default App;