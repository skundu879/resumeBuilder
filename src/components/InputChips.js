import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputChips() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);
  const [dataset, setDataSet] = React.useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setDataSet(event.target.value);
  };
  const addLang = (event) => {
    event.preventDefault();
    setChipData([
      ...chipData,
      {
        key: chipData.length + 1,
        label: dataset,
      },
    ]);
    console.log(dataset.key);
    console.log(dataset.label);
    console.log(chipData);
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
    console.log(chipData);
  };

  return (
    <div>
      <Paper component="ul" className={classes.root}>
        {chipData.map((data) => {
          let icon;
          return (
            <li key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={
                  data.label === "React" ? undefined : handleDelete(data)
                }
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
      <br />
      <TextField
        id="outlined-textarea"
        label="Programing Langulage"
        placeholder="Skill Add"
        variant="outlined"
        value={dataset.label}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        size="small"
        color="primary"
        className={classes.margin}
        onClick={addLang}>
        Add language
      </Button>
    </div>
  );
}
