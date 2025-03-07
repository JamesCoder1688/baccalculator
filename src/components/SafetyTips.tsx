export default function SafetyTips() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Alcohol Safety Tips</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Know Your Limits</h3>
          <p className="text-gray-600">
            Understanding your alcohol tolerance is crucial. A standard drink contains about 14 grams of pure alcohol, which is found in 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of distilled spirits. Always drink in moderation and avoid binge drinking.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Signs of Alcohol Poisoning</h3>
          <p className="text-gray-600">
            Alcohol poisoning is a serious and potentially life-threatening condition. Symptoms include confusion, vomiting, seizures, slow or irregular breathing, and unconsciousness. If you suspect someone has alcohol poisoning, call emergency services immediately.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Driving Safety</h3>
          <p className="text-gray-600">
            Never drink and drive. Alcohol impairs your judgment, coordination, and reaction time. If you plan to drink, arrange for a designated driver, use public transportation, or call a ride-sharing service. Remember, it takes about one hour for your body to process one standard drink.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Stay Hydrated</h3>
          <p className="text-gray-600">
            Alcohol can dehydrate your body, leading to headaches and fatigue. Drink plenty of water before, during, and after consuming alcohol to stay hydrated and reduce the risk of a hangover.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Eat Before Drinking</h3>
          <p className="text-gray-600">
            Consuming food before drinking alcohol can slow the absorption of alcohol into your bloodstream, reducing its effects. Opt for meals rich in protein, healthy fats, and complex carbohydrates.
          </p>
        </div>
      </div>
    </div>
  );
}
