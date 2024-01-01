// src/components/FeaturedJobs.js
import React from 'react';

const FeaturedJobs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Job Card (Sample) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Learn More</a>
          </div>
          {/* Repeat similar cards for other featured jobs */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
