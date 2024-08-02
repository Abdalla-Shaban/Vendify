"use client";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, DatePicker } from "@nextui-org/react";
import {
  GovernoratesAndCitiesAR,
  GovernoratesAndCitiesEN,
  SitesPromote,
  titles,
} from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
const ProfileForm = () => {
  const t = useTranslations("ProfilePage");
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    governorate: "",
    city: "",
  });

  const locale = useLocale();
  const filterdCities =
    locale === "ar"
      ? GovernoratesAndCitiesAR.filter(
          ({ key }) => key === formData.governorate
        ).map(({ cities }) => cities)
      : GovernoratesAndCitiesEN.filter(
          ({ key }) => key === formData.governorate
        ).map(({ cities }) => cities);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Select
          name="title"
          variant="bordered"
          className="md:max-w-24"
          label={t("selectTitleLabel")}
          labelPlacement="outside"
          placeholder={t("selectTitlePlaceHolder")}
          size="lg"
        >
          {titles.map(({ key, label }) => (
            <SelectItem value={label} key={key}>
              {label}
            </SelectItem>
          ))}
        </Select>
        <Input
          name="firstName"
          type="text"
          variant="bordered"
          label={t(`firstNameInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`firstNameInputPlaceHolder`)}
          size="lg"
        />
        <Input
          name="lastName"
          type="text"
          variant="bordered"
          label={t(`lastNameInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`lastNameInputPlaceHolder`)}
          size="lg"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Input
          name="email"
          type="email"
          variant="bordered"
          label={t(`emailInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`emailInputPlaceHolder`)}
          size="lg"
        />
        <DatePicker
          name="dateOfBirth"
          variant="bordered"
          label={t("dateOfBirthLabel")}
          labelPlacement="outside"
          size="lg"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Select
          name="sitesPromote"
          variant="bordered"
          label={t("selectSitesPromoteLabel")}
          labelPlacement="outside"
          placeholder={t("selectSitesPromotePlaceHolder")}
          size="lg"
        >
          {SitesPromote.map(({ key, label }) => (
            <SelectItem value={label} key={key}>
              {label}
            </SelectItem>
          ))}
        </Select>
        <Input
          name="wbsiteUrl"
          type="text"
          variant="bordered"
          label={t(`websiteUrlInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`websiteUrlInputPlaceHolder`)}
          size="lg"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Input
          name="phone"
          type="text"
          variant="bordered"
          label={t(`phoneInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`phoneInputPlaceHolder`)}
          size="lg"
        />
        <Select
          name="governorates"
          variant="bordered"
          label={t("selectGovernorateLabel")}
          labelPlacement="outside"
          placeholder={t("selectGovernoratePlaceHolder")}
          size="lg"
          onChange={(e) => {
            setFormData({ ...formData, governorate: `${e.target.value}` });
          }}
        >
          {locale === "en"
            ? GovernoratesAndCitiesEN.map(({ key, name }) => (
                <SelectItem value={formData.governorate} key={key}>
                  {name}
                </SelectItem>
              ))
            : GovernoratesAndCitiesAR.map(({ key, name }) => (
                <SelectItem value={formData.governorate} key={key}>
                  {name}
                </SelectItem>
              ))}
        </Select>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Input
          name="postalCode"
          type="text"
          variant="bordered"
          label={t(`postalCodeInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`postalCodeInputPlaceHolder`)}
          size="lg"
        />
        <Select
          name="cities"
          variant="bordered"
          label={t("selectCityLabel")}
          labelPlacement="outside"
          placeholder={t("selectCityPlaceHolder")}
          size="lg"
          onChange={(e) => {
            setFormData({ ...formData, city: `${e.target.value}` });
          }}
        >
          {filterdCities[0]?.map((city) => (
            <SelectItem value={formData.city} key={city}>
              {city}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Input
          name="address"
          type="text"
          variant="bordered"
          label={t(`addressInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`addressInputPlaceHolder`)}
          size="lg"
        />
      </div>
      <div className="w-full">
        <Input
          name="photoFile"
          type="file"
          variant="bordered"
          label={t(`photoFileInputLabel`)}
          labelPlacement="outside"
          size="lg"
        />
      </div>
      <div className="w-full">
        <Input
          name="logoFile"
          type="file"
          variant="bordered"
          label={t(`logoFileInputLabel`)}
          labelPlacement="outside"
          size="lg"
        />
      </div>
      <div className="w-full">
        <Input
          name="facebookPage"
          type="text"
          variant="bordered"
          label={t(`facebookPageInputLabel`)}
          labelPlacement="outside"
          placeholder={t(`facebookPageInputPlaceHolder`)}
          size="lg"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3">
        <Button
          type="submit"
          variant="bordered"
          size="lg"
          className="bg-green-950 text-white"
        >
          {t("saveButton")}
        </Button>
        <Button
          type="button"
          variant="bordered"
          size="lg"
          className="bg-green-950 text-white"
        >
          {t("changePasswordButton")}
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
