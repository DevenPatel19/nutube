import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";
import Loader from "../Loader/Loader";

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return <Loader />;

    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            alignItems="start"
            gap={2}
        >
            {videos.map((item) => (
                <Box key={item.id.videoId || item.id.channelId}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
