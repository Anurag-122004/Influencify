type AgentPulseProps = {
  size?: "small" | "medium" | "large";
  color?: "blue" | "green" | "purple";
};

function AgentPulse({ size = "medium", color = "blue" }: AgentPulseProps) {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  };

  const colorClasses = {
    blue: "bg-blue-500 shadow-[0_0_8px_4px_rgba(59,130,246,0.5)]",
    green: "bg-green-500 shadow-[0_0_8px_4px_rgba(34,197,94,0.5)]",
    purple: "bg-purple-500 shadow-[0_0_8px_4px_rgba(168,85,247,0.5)]",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
    />
  );
}

export default AgentPulse;
