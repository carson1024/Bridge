import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { useTranslation } from "react-i18next";

export function useTestimonials() {
  const { i18n } = useTranslation();
  const { data, error, mutate } = useSWR(`/api/testimonials?locale=${i18n.language}`, fetcher);

  return {
    testimonials: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useBlogs({ searchQuery = "", page = 1 }) {
  const { i18n } = useTranslation();
  const queryString = new URLSearchParams({
    locale: i18n.language,
    search: searchQuery || "",
    page: page.toString(),
  }).toString();

  const { data, error, mutate } = useSWR(`/api/blog?${queryString}`, fetcher);

  return {
    blogs: data?.blogs,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useBranches() {
  const { i18n } = useTranslation();
  const { data, error, mutate } = useSWR(`/api/branches?locale=${i18n.language}`, fetcher);

  return {
    branches: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useServices() {
  const { i18n } = useTranslation();
  const { data, error, mutate } = useSWR(`/api/service?locale=${i18n.language}`, fetcher);

  return {
    services: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useServiceById(id) {
  const { i18n } = useTranslation();
  const { data, error } = useSWR(id ? `/api/service/${id}?locale=${i18n.language}` : null, fetcher);

  return {
    service: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useTeam() {
  const { i18n } = useTranslation();
  const { data, error } = useSWR(`/api/team?locale=${i18n.language}`, fetcher);

  return {
    teams: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useAboutUs() {
  const { i18n } = useTranslation();
  const { data, error } = useSWR(`/api/aboutus?locale=${i18n.language}`, fetcher);

  return {
    about: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useSiteInfo() {
  const { data, error } = useSWR(`/api/siteinfo`, fetcher);

  return {
    site_info: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useContactInfo() {
  const { i18n } = useTranslation();
  const { data, error } = useSWR(`/api/contactinfo?locale=${i18n.language}`, fetcher);

  return {
    contact: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useSlider() {
  const { data, error } = useSWR(`/api/slider`, fetcher);

  return {
    slider: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useCountries() {
  const { i18n } = useTranslation();
  const { data, error } = useSWR(`/api/countries?locale=${i18n.language}`, fetcher);

  return {
    countries: data?.countries,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useUniversities(location) {
  const { i18n } = useTranslation();
  const { data, error } = useSWR(location ? `/api/universities??locale=${i18n.language}&location=${location}` : null, fetcher);

  return {
    universities: data?.universities,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useUniversityDetail(universityName) {
  const { i18n } = useTranslation();
  const { data, error } = useSWR(universityName ? `/api/universities/${universityName}?locale=${i18n.language}` : null, fetcher);

  return {
    university: data?.university,
    isLoading: !error && !data,
    isError: error,
  };
}