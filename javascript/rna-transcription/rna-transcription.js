const DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(dnaSeq) {
  const converter = { C: 'G', G: 'C', A: 'U', T: 'A' }

  if (dnaSeq.includes('X')) {
    throw new Error('Invalid input')
  }

  return dnaSeq
    .split('')
    .map(dna => {
      return converter[dna]
    })
    .join('')
}

module.exports = DnaTranscriber
