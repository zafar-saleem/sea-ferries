"use client";

import { Button } from "@/components/button/button";
import { GlobalFilters } from "@/components/filters/global/filters";
import { Sort } from "@/components/filters/sort/sort";
import { Container } from "@/components/utils/container/container";
import { Grid } from "@/components/utils/grid/grid";
import { Title } from "@/components/utils/title/title";
import Image from "next/image";
import React from "react";
import Arrow from "../assets/arrow-down.webp";
import { Search } from "@/components/filters/search/search";
import { Live } from "@/components/filters/live/live";
import { PageFilter } from "@/components/filters/page-filter/page-filter";
import { Contents } from "@/components/pages/home/contents/contents";

export default function Home() {
  return (
    <main>
      <Container>
        <Grid rows={[1]} cols={[2,1]} responsive={true}>
          <div>
            <Title>Ferry operators</Title>
            <p>Discover the <b>57 ferry operators</b> we work with</p>
          </div>
          <Button>Book your tickets</Button>
        </Grid>
        <Grid rows={[1]} cols={[0.3,0.8,0.1, 1]}>
          <GlobalFilters>Filters</GlobalFilters>
          <Sort>
            <span>Sort by: Reviews number (high first)</span>
            <Image
              src={Arrow}
              width={13}
              height={7}
              alt="Down Icon"
            />
          </Sort>
          <Search />
          <Live>Live Map View</Live>
        </Grid>
        <Grid rows={[1]} cols={[0.5, 1]} responsive={true}>
          <PageFilter></PageFilter>
          <Contents />
        </Grid>
      </Container>
    </main>
  )
}
