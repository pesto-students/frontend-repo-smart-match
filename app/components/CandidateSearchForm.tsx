import React from 'react';

const CandidateSearchForm: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Find me a person having...</h2>
            <div className="flex mt-4">
                <input type="text" placeholder="Skill (e.g., Python)" className="p-3 border rounded-lg" />
                <input type="text" placeholder="Location (e.g., India)" className="p-3 border rounded-lg mx-2" />
                <input type="number" placeholder="Years of Experience" className="p-3 border rounded-lg" />
            </div>
            <button className="mt-4 bg-orange-500 text-white p-3 rounded-lg">Search Candidates</button>
        </div>
    );
};

export default CandidateSearchForm;
