import PropTypes from 'prop-types';

export default function KeyBadge({children, ...props}) {
    return (
        <span className="px-1 py-0.5 text-sm bg-gray-500 text-gray-950 rounded text-center" {...props}>
            {children}
        </span>
    )
}

KeyBadge.propTypes = {
    children: PropTypes.node,
}