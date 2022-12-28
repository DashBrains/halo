import {
  styled,
  ListItem as MUIListItem,
  ListItemButton as MUIListItemButton,
} from '@mui/material'

const ListItem = styled(MUIListItem)({
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: '0.125rem',
  paddingBottom: '0.125rem',
})

const ListItemButton = styled(MUIListItemButton)((props) => {
  const shadowColor =
    props.theme.palette.mode && props.theme.palette.mode === 'dark'
      ? '255, 255, 255'
      : '0, 0, 0'

  return {
    borderRadius: props.theme.shape.borderRadius,
    margin: '0.125rem',
    marginTop: 0,
    marginBottom: 0,
    '&:active': {
      backgroundColor: `rgba(${shadowColor}, 0.08)`,
    },
  }
}) as typeof MUIListItemButton

export { ListItem, ListItemButton }
