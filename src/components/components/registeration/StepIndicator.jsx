export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center flex-1">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all ${
              step.id <= currentStep
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {step.id}
          </div>
          <div className="ml-3">
            <p
              className={`text-sm font-medium ${
                step.id <= currentStep
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {step.label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-4 rounded-full transition-all ${
                step.id < currentStep ? "bg-primary" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
