import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export function useTestimonials() {
  const { data, error, mutate } = useSWR("/api/testimonials", fetcher);

  return {
    testimonials: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useBlogs({ searchQuery = "", page = 1 }) {
  const queryString = new URLSearchParams({
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
  const { data, error, mutate } = useSWR("/api/branches", fetcher);

  return {
    branches: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useServices() {
  const { data, error, mutate } = useSWR("/api/service", fetcher);

  return {
    services: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useServiceById(id) {
  const { data, error } = useSWR(id ? `/api/service/${id}` : null, fetcher);

  return {
    service: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useTeam() {
  const { data, error } = useSWR(`/api/team`, fetcher);

  return {
    teams: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useAboutUs() {
  const { data, error } = useSWR(`/api/aboutus`, fetcher);

  return {
    about: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useContactInfo() {
  const { data, error } = useSWR(`/api/contactinfo`, fetcher);

  return {
    contact: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useCountries() {
  const { data, error } = useSWR("/api/countries", fetcher);

  return {
    countries: data?.countries,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useUniversities(location) {
  const { data, error } = useSWR(location ? `/api/universities?location=${location}` : null, fetcher);

  return {
    universities: data?.universities,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useUniversityDetail(universityName) {
  const { data, error } = useSWR(universityName ? `/api/universities/${universityName}` : null, fetcher);

  return {
    university: data?.university,
    isLoading: !error && !data,
    isError: error,
  };
}