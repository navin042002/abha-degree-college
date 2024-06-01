import React, { useState } from 'react';
import { syllabusData } from '../constants';
// Sample syllabus data


const SyllabusCard = ({ title, about, link }) => (
  <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{about}</p>
    </div>
    <div className="px-6 py-4 overflow-hidden">
      <iframe src={link} className="w-full h-64"></iframe>
    </div>
  </div>
);

const SyllabusPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Arts');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredSyllabus = syllabusData.filter(syllabus => syllabus.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Arts' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Arts')}>Arts</button>
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Commerce' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Commerce')}>Commerce</button>
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Science' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Science')}>Science</button>
      </div>
      <div className="flex flex-wrap justify-center overflow-hidden">
        {filteredSyllabus.map(syllabus => (
          <SyllabusCard key={syllabus.id} title={syllabus.title} about={syllabus.about} link={syllabus.link} />
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;
