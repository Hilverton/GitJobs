type JobsType = {
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  description: string;
  how_to_apply: string;
  id: string;
  location: string;
  title: string;
  type: string;
  url: string;
};

type CardProps = {
  data: JobsType;
};

type InputProps = {
  icon: string;
  placeholder: string;
};

type DetailsParams = {
  id: string;
};

type DetailsLocation = {
  job: JobsType;
};
