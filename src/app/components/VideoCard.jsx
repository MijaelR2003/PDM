import Image from "next/image";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
export default function VideoCard({
  title,
  creatorName,
  creatorAvatar,
  thumbnailUrl,
  followers,
  onClickFunction,
}) {
  return (
    <Card className="" onClick={onClickFunction}>
      <CardBody className="flex justify-center items-center h-38 relative">
        <Image
          width={270}
          height={150}
          alt="Card background"
          className="z-0 w-full h-full object-cover rounded-lg object-center"
          src={thumbnailUrl}
        />
      </CardBody>
      <CardFooter className="pb-3 pt-0 px-4 flex-col items-start">
        <h4 className="font-bold text-large mb-1">
          <a href="/video">{title}</a>
        </h4>

        <div className="flex gap-5 ">
          <Avatar radius="full" size="md" src={creatorAvatar} />

          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-bold leading-none">{creatorName}</h4>
            <h5 className="text-default-500">{followers} Seguidores</h5>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
