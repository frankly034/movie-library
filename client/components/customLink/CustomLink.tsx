"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import styled from "styled-components";

const CustomLink = styled(Link)<ComponentProps<typeof Link>>`
  text-decoration: none;

  transition: all;
  transition-duration: ${({ theme }) => theme.variables.transitionDuration};
  transition-delay: ${({ theme }) => theme.variables.transitionDelay};

  &:hover {
    transform: scale(${({ theme }) => theme.variables.scale});
    cursor: pointer;
  }
`;

export default CustomLink;
