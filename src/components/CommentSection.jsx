import { AbsoluteCenter, Box, Divider, Heading } from "@chakra-ui/react";
import CommentInput from "../components/CommentInput";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import { commentItemShape } from "./CommentItem";

export default function CommentSection({
  comments,
  comment,
  upVote,
  downVote,
  neutralizeVote,
  authUserId,
}) {
  return (
    <>
      <CommentInput comment={comment} />
      <Box position="relative" my={5}>
        <Divider borderColor="teal.500" />
        <AbsoluteCenter px="4" bg="teal.100">
          <Heading as="h3" fontSize="xl" color="teal.900">
            Komentar ({comments.length})
          </Heading>
        </AbsoluteCenter>
      </Box>
      <CommentList
        commentList={comments}
        upVote={upVote}
        downVote={downVote}
        neutralizeVote={neutralizeVote}
        authUserId={authUserId}
      />
    </>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  comment: PropTypes.func.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  authUserId: PropTypes.string.isRequired,
};
