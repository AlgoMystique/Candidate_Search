import { useState, useEffect, useMemo } from 'react';
import { Candidate } from '../interfaces/candidate.interface';

type SortField = 'login' | 'name' | 'location' | 'company';
type SortOrder = 'asc' | 'desc';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [filterText, setFilterText] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, [setSavedCandidates]);

  const filteredAndSortedCandidates = useMemo(() => {
return savedCandidates
.filter(candidate => {
 const searchTerm = filterText.toLowerCase();
return (
(candidate.name?.toLowerCase() || '').includes(searchTerm) ||
candidate.login.toLowerCase().includes(searchTerm) ||
(candidate.location?.toLowerCase() || '').includes(searchTerm) ||
(candidate.company?.toLowerCase() || '').includes(searchTerm)
);
})
 .sort((a, b) => {
 const aValue = (a[sortField] || '').toString().toLowerCase();
 const bValue = (b[sortField] || '').toString().toLowerCase();
        
 if (sortOrder === 'asc') {
 return aValue.localeCompare(bValue);
} else {
 return bValue.localeCompare(aValue);
  } });
  }, [savedCandidates, filterText, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
if (field === sortField) {
setSortOrder(current => current === 'asc' ? 'desc' : 'asc');
} else {
setSortField(field);
setSortOrder('asc');
}
 };

const handleRemove = (candidateId: number) => {
const updatedCandidates = savedCandidates.filter(c => c.id !== candidateId);
setSavedCandidates(updatedCandidates);
localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
};

return (
<div className="container">
 <h1>Potential Candidates</h1>

 <div className="controls-container">
 <input
type="text"
value={filterText}
 onChange={(e) => setFilterText(e.target.value)}
 placeholder="Filter candidates..."
 className="filter-input" />
</div>

{filteredAndSortedCandidates.length === 0 ? (
<div className="no-candidates">
{filterText ? 'No candidates match your search' : 'No candidates have been saved yet'}
 </div>
) : (
<table className="candidates-table">
<thead>
<tr>
 <th>Candidate Image</th>
 <th onClick={() => handleSort('name')} className="sortable">
 Candidate Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
 </th>
<th onClick={() => handleSort('location')} className="sortable">
 Candidate Location {sortField === 'location' && (sortOrder === 'asc' ? '↑' : '↓')}
</th>
 <th>Candidate Email</th>
 <th onClick={() => handleSort('company')} className="sortable">
 Current Company {sortField === 'company' && (sortOrder === 'asc' ? '↑' : '↓')}
</th>
  <th>Candidate Bio</th>

</tr>
 </thead>
 <tbody>
 {filteredAndSortedCandidates.map((candidate) => (
 <tr key={candidate.id}>
<td>
 <img
 src={candidate.avatar_url}
alt={`${candidate.login}'s avatar`}
className="table-avatar"
 />
</td>
<td>
  {candidate.name || candidate.login}
  <span className="username">({candidate.login})</span>
</td>
<td>{candidate.location || 'Not specified'}</td>
<td>
  {candidate.email ? (
 <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
  ) : (
'Not specified'
  )}
 </td>
 <td>{candidate.company || 'Not specified'}</td>
 <td>{candidate.bio || 'Not specified'}</td>
<td>
 <button 
 onClick={() => handleRemove(candidate.id)}
 className="reject-button"> −
</button>
</td>
  </tr>
))}
</tbody>
  </table>
)}
 </div> );
};

export default SavedCandidates;