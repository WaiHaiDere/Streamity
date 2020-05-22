/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { createMount } from "@material-ui/core/test-utils";
import { render, screen } from "@testing-library/react";

import AddressSummary from "./AddressSummary";

describe("Address Summary test", () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it.skip("generates 'From' and 'To' labels", () => {
    const mockOnClick = jest.fn();

    render(<AddressSummary handlePageChange={mockOnClick} page={0} />);
    expect(screen.queryByText("From")).toBeTruthy();
    expect(screen.queryByText("To")).toBeTruthy();
  });

  it.skip("generates pickup address", () => {
    const mockOnClick = jest.fn();
    const mockDetails = {
      fromAddress: "pickup Address",
      isDomestic: true,
      deliveryAddress: {
        i18nDetails: {
          fmt: "%N%n%O%n%A%n%S%Z %C",
        },
        domesticAddress: "",
        country: "New Zealand",
      },
    };

    render(
      <AddressSummary
        details={mockDetails}
        handlePageChange={mockOnClick}
        page={0}
      />
    );
    expect(screen.queryByText("pickup Address")).toBeTruthy();
  });

  it.skip("generates domestic delivery address", () => {
    const mockOnClick = jest.fn();
    const mockDetails = {
      fromAddress: "pickup Address",
      isDomestic: true,
      deliveryAddress: {
        i18nDetails: {
          fmt: "%N%n%O%n%A%n%S%Z %C",
        },
        domesticAddress: "delivery address",
        country: "New Zealand",
      },
    };

    render(
      <AddressSummary
        details={mockDetails}
        handlePageChange={mockOnClick}
        page={0}
      />
    );
    expect(screen.queryByText("delivery address")).toBeTruthy();
  });

  it.skip("generates international delivery address", () => {
    const mockOnClick = jest.fn();
    const mockDetails = {
      fromAddress: "",
      isDomestic: false,
      deliveryAddress: {
        i18nDetails: {
          fmt: "%O%n%N%n%A%n%C %S %Z",
        },
        name: "Test",
        organisation: "Test.inc",
        streetAddress: "25 Test Street",
        district: "Parnell",
        state: "Test",
        zipCode: "1111",
        city: "Auckland",
        country: "Australia",
      },
    };

    render(
      <AddressSummary
        details={mockDetails}
        handlePageChange={mockOnClick}
        page={0}
      />
    );
    expect(
      screen.queryByText("25 Test Street, Auckland Test 1111 Australia")
    ).toBeTruthy();
  });
});
