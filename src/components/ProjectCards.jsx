import React from "react";
import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";

const ProjectCards = ({
  projlink,
  projtitle,
  projdescription,
  projimage,
  projtags,
  projgit,
}) => {
  return (
    <div className="cards pb-4 mt-3 mb-5 px-5 md:px-0">
      <a href={projlink} target="_blank">
        <Card.Root
          flexDirection={{ base: "column", md: "row" }}
          overflow="hidden"
          maxW="xl"
          minH="200px"
          className=" border border-cyan-50"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "400px", md: "240px" }}
            src={projimage}
            alt="Caffe Latte"
          />
          <Box>
            <Card.Body className="p-0 flex flex-col justify-between h-full ">
              <div className="flex flex-col py-2 px-4 gap-2 w-full md:w-[335px] h-full ">
                <Card.Title className="text-xl font-bold" mb="2">
                  {projtitle}
                </Card.Title>

                <Card.Description>{projdescription}</Card.Description>
                <HStack className="flex flex-wrap" mt="4">
                  {projtags.map((tag, index) => {
                    return (
                      <Badge className="text-sm" key={index}>
                        {tag}
                      </Badge>
                    );
                  })}
                </HStack>
              </div>

              <div className="flex flex-row gap-2 justify-between align-middle px-4 ">
                <a href={projgit} target="_blank">
                  <svg
                    className="md:w-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
                    />
                  </svg>
                </a>

                <Button src={projlink}>
                  Visit Website{" "}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Button>
              </div>
            </Card.Body>
          </Box>
        </Card.Root>
      </a>
    </div>
  );
};

export default ProjectCards;
