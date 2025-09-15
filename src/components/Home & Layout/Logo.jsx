import { Box } from '@mui/material'
import G2 from "../../assets/G3.png";

export const Logo = () => {
  return (
    <Box
        sx={{
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            p: 4,
            px: 10,
            borderRadius: 2,
            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={G2} alt="gurbiados-logo" />
          </Box>

          {/* <Typography variant="h6" gutterBottom>
            Llenguense!!!
          </Typography> */}
        </Box>
      </Box>
  )
}
