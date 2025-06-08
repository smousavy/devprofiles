interface iContact {
  city: string;
  address: string;
  phone: string;
  email: string;
}
interface iSkill {
  name: string;
  proficiency: number;
}
interface iExperience {
  title: string;
  company: string;
  start: number;
  end: number;
  description: string;
}
interface iEducation {
  degree: string;
  major: string;
  university: string;
  start: number;
  end: number;
}
interface iUser {
  id: number;
  avatar: string;
  name: string;
  contact: iContact;
  job_title: string;
  skills: iSkill[];
  experience_years: number;
  birth_year: number;
  current_company: string;
  experience: iExperience[];
  education: iEducation;
  linkedin: string;
  github: string;
}
export default iUser;
