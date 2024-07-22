import Badge from '@mui/material/Badge';

const BadgeComp = ({ Icon, data, color }) => {

    return (
        <Badge badgeContent={data} color={color}>
            <Icon />
        </Badge>
    );
};

export default BadgeComp;