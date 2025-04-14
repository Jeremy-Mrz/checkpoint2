import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country, CreateCountryInputs } from "../entities/countries";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async countries() {
    const countries = await Country.find();
    return countries;
  }

  @Query(() => Country, { nullable: true })
  async country(
    @Arg('country_code', () => String) country_code: string
  ) {
    const country = await Country.findOneBy({country_code});
    return country;
  }

  @Query(() => [Country], { nullable: true })
  async countriesByContinent(
    @Arg('continent_code', () => String) continent_code: string
  ) {
    const countries = await Country.findBy({continent_code});
    return countries;
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg('data', () => CreateCountryInputs) { ...data }: CreateCountryInputs
  ) {
    const newCountry = new Country;
    Object.assign(newCountry, data);
    await newCountry.save();
    return newCountry;
  }
}