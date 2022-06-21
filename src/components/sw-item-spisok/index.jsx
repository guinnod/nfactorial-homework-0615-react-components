import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const ItemSpisok = ({ children,sxItemText}) => {
 
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText sx={sxItemText} primary={children} />
      </ListItemButton>
    </ListItem>
  );
};
