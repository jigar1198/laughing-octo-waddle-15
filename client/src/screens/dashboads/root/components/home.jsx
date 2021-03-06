import React, { Fragment, Component } from "react";
import { Grid, Typography, Container, withStyles, Paper, Box } from "@material-ui/core";
import HtmlTitle from "components/title";

const styles = {
  pageHeading: {
    fontWeight: 'bold'
  },
  boxBorder: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    opacity: "1",
    padding: "15px"
  },
  content: {
    flexGrow: 1,
    height: "auto",
    overflow: "none",
    width: '75vw'
  },
  paper:{
    display: 'flex',
    flexDirection: "column",
    overflow: 'auto',
    padding: 32
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <HtmlTitle title={"Home"} />
        <Grid>
          <main className={classes.content}>
            <Container maxWidth="lg">
              <br />
              <Paper className={classes.paper} elevation={4}>
                <Box className={classes.boxBorder}>
                  <div>
                    <Typography className={classes.pageHeading} component="h5" variant="h5">
                      Home Page
                    </Typography>
                  </div>
                </Box>
              </Paper><br />
            </Container>
          </main>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);
