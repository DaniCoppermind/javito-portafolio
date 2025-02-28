const SkillCard = ({ skill }) => {
  const { title, percentage, color } = skill;

  const strokeDasharray = `${percentage}, 100`;
  const strokeDashoffset = 0;
  const transition =
    'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s';

  return (
    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="font-semibold">{title}</span>
        <span className="pr-5 font-semibold">{percentage}%</span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth="1"
          fillOpacity="0"
        ></path>
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          stroke={color}
          strokeWidth="1"
          fillOpacity="0"
          style={{
            strokeDasharray,
            strokeDashoffset,
            transition,
          }}
        ></path>
      </svg>
    </div>
  );
};

export default SkillCard;
