"use client";

import { useState } from "react";
import { Select, Button, notification, Tooltip } from "antd";
import { useRouter } from "next/navigation";
import { useCountries, useUniversities } from "@/src/hooks";

const { Option } = Select;
const FilterBox = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    property: "", // country
    market: "", // university
  });

  const [disabledDropdowns, setDisabledDropdowns] = useState({
    market: true, // University dropdown initially disabled
  });

  const {
    countries,
    isLoading: countriesLoading,
    isError: countriesError,
  } = useCountries();
  const {
    universities,
    isLoading: universitiesLoading,
    isError: universitiesError,
  } = useUniversities(formData.property);

  const handleCountryChange = (value) => {
    setFormData({ ...formData, property: value, market: "" });
    setDisabledDropdowns({ market: false });
  };

  const handleUniversityChange = (value) => {
    setFormData({ ...formData, market: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { property, market } = formData;

    if (!property) {
      notification.error({ message: "Please select a country." });
      return;
    }

    if (market) {
      router.push(`/pages-menu/university-details?university=${market}`);
    } else {
      router.push(`/pages-menu/universities-list?country=${property}`);
    }
  };

  if (countriesLoading) return <p>Loading...</p>;
  if (countriesError) return <p>Failed to load countries.</p>;

  return (
    <form onSubmit={handleSubmit} className="search-area">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 gx-0 align-items-center">
        <div className="col-span-4 md:col-span-4">
          <div className="input-block">
            <Tooltip title="Select a country" placement="top">
              <Select
                showSearch
                value={formData.property}
                placeholder="Select Country"
                onChange={handleCountryChange}
                optionFilterProp="children"
                style={{ width: "100%", height: "6vh"  }}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {countries?.map((country) => (
                  <Option key={country.id} value={country.name}>
                    {country.name}
                  </Option>
                ))}
              </Select>
            </Tooltip>
          </div>
        </div>

        <div className="col-span-4 md:col-span-3">
          <div className="input-block">
            <Tooltip title="Select a university" placement="top">
              <Select
                showSearch
                value={formData.market}
                placeholder="Select University"
                onChange={handleUniversityChange}
                optionFilterProp="children"
                style={{ width: "100%", height: "6vh" }}
                disabled={disabledDropdowns.market}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {universities?.map((university) => (
                  <Option key={university.id} value={university.name}>
                    {university.name}
                  </Option>
                ))}
              </Select>
            </Tooltip>
          </div>
        </div>

        <div className="col-span-4 md:col-span-5">
          <div className="input-block">
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", height: "6vh" }}
            >
              Search Now
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterBox;
