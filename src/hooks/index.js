import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { useTranslation } from "react-i18next";

export function useTestimonials(locale = 'en') {
  const { data, error, mutate } = useSWR(`/api/testimonials?locale=${locale}`, fetcher);

  return {
    testimonials: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useBlogs({ searchQuery = "", page = 1 }, locale = 'en') {
  const queryString = new URLSearchParams({
    locale: locale,
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

export function useBranches(locale = 'en') {
  const { data, error, mutate } = useSWR(`/api/branches?locale=${locale}`, fetcher);

  return {
    branches: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useServices(locale = 'en') {
  const { data, error, mutate } = useSWR(`/api/service?locale=${locale}`, fetcher);

  return {
    services: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useServiceById(id, locale = 'en') {
  const { data, error } = useSWR(id ? `/api/service/${id}?locale=${locale}` : null, fetcher);

  return {
    service: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useTeam(locale = 'en') {
  const { data, error } = useSWR(`/api/team?locale=${locale}`, fetcher);

  return {
    teams: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useAboutUs(locale = 'en') {
  const { data, error } = useSWR(`/api/aboutus?locale=${locale}`, fetcher);

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

export function useContactInfo(locale = 'en') {
  const { data, error } = useSWR(`/api/contactinfo?locale=${locale}`, fetcher);

  return {
    contact: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function usePartners() {
  const { data, error } = useSWR(`/api/partners`, fetcher);

  return {
    partners: data?.data,
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

export function useCountries(locale = 'en') {
  const { data, error } = useSWR(`/api/countries?locale=${locale}`, fetcher);

  return {
    countries: data?.countries,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useUniversities(location, locale = 'en') {
  const { data, error } = useSWR(location ? `/api/universities??locale=${locale}&location=${location}` : null, fetcher);

  return {
    universities: data?.universities,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useUniversityDetail(universityName, locale = 'en') {
  const { data, error } = useSWR(universityName ? `/api/universities/${universityName}?locale=${locale}` : null, fetcher);

  return {
    university: data?.university,
    isLoading: !error && !data,
    isError: error,
  };
}