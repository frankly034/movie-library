"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import styled from "styled-components";

const CustomLink = styled(Link)<ComponentProps<typeof Link>>`
  text-decoration: none;

  transition: all;
  transition-duration: 0.5s;
  transition-delay: 0.1s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export default CustomLink;
